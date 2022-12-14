import io from 'socket.io-client';

let socket = undefined;
export const useCodeValidation = (recaptcha: any) => {
  const config = useRuntimeConfig();
  const positionInQueue = ref(0);
  let jobId;

  const validate = (
    course: string,
    type: string,
    chapterId: string,
    taskId: string,
    code: string,
    token: string = ''
  ) => {
    return new Promise((resolve, reject) => {
      positionInQueue.value = 0;

      if (socket?.connected) {
        socket.disconnect();
      }

      socket = io(config.API_SOCKET_URL);

      const register = () => {
        socket.emit('register', { course, type, chapterId, taskId, token }, async (data) => {
          console.log('register', data);
          positionInQueue.value = data.jobId - data.lastJobId;
          jobId = data.jobId;
        });
      };
      register();

      socket.on('recaptcha', async () => {
        console.log('recaptcha requested');
        token = await recaptcha.value.execute();
        register();
      });

      socket.on('request-code', (callback) => {
        console.log('code requested');
        callback(code);
      });

      socket.on('last-job-id', (lastJobId) => {
        console.log('last job it:', lastJobId);
        positionInQueue.value = jobId - lastJobId;
      });

      socket.on('result', (res) => {
        console.log('result:', res);

        if (res.code === 0) {
          resolve({ result: res.stdout });
        } else {
          resolve({ error: res.stdout });
        }
      });

      socket.on('error', (err) => {
        console.log('error:', err);
        resolve({ error: err });
      });
    });
  };

  return {
    validate,
    positionInQueue,
  };
};
