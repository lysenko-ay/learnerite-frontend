import io from 'socket.io-client';

let socket = undefined;
export const useCodeValidation = () => {
  const config = useRuntimeConfig();
  const validate = (course: string, type: string, chapterId: string, taskId: string, code: string) => {
    return new Promise((resolve, reject) => {
      if (socket?.connected) {
        socket.disconnect();
      }

      socket = io(config.API_SOCKET_URL);
      socket.emit('register', { course, type, chapterId, taskId }, (data) => {
        console.log('register', data);
      });

      socket.on('request-code', (callback) => {
        console.log('code requested');
        callback(code);
      });

      socket.on('last-job-id', (lastJobId) => {
        console.log('last job it:', lastJobId);
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
  };
};
