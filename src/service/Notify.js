import { toast } from 'react-toastify';

export const notifySuccess = () => {
  toast.success('New task added!', {
    position:"top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
};

export const notifyTrash = (task) => {
  toast.info(`${task.name} deleted!`, {
    position:"top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
};

export const notifyStart = (task) => {
  toast.info(`${task.name} moved to In Progress!`, {
    position:"top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
};

export const notifyReview = (task) => {
  toast.info(`${task.name} moved to Review!`, {
    position:"top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
};

export const notifyDone = (task) => {
  toast.info(`${task.name} moved to Done! 🚀`, {
    position:"top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
};

export const notifyEdit = () => {
  toast.info('Changes Saved Successfully!', {
    position:"top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
};