import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ClipboardListIcon, XIcon } from "@heroicons/react/solid";
import ApplicationCard from "../ApplicationCard";

const ApplicationModal = ({
  open = false,
  handleClose = () => null,
  applications = [{ id: 1 }],
}) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={handleClose}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all w-full sm:my-8 sm:align-middle sm:max-w-lg md:max-w-2xl">
              <div className="bg-white p-6">
                <div className="mx-auto flex-shrink-0 flex items-center justify-between pb-5 border-b border-b-primary/20">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-medium text-primary"
                  >
                    Applicants for this job
                  </Dialog.Title>
                  <button onClick={() => handleClose(false)}>
                    <XIcon
                      className="h-6 w-6 text-primary"
                      aria-hidden="true"
                    />
                  </button>
                </div>
                <div>
                  <p className="mt-5 mb-2.5 text-sm text-primary">
                    Total 35 applications
                  </p>
                  <div className="rounded-lg bg-gray-950/20 h-[598px]">
                    {applications.length > 0 ? (
                      <div className="flex gap-8 p-2">
                        {applications.map((app) => (
                          <ApplicationCard application={app} />
                        ))}
                      </div>
                    ) : (
                      <div className="flex justify-center items-center flex-col h-full">
                        <ClipboardListIcon className="text-gray-950 w-20 h-28" />
                        <p className="text-primary/80">
                          No applications available!
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ApplicationModal;
