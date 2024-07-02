import React from 'react';

function EventDetails() {
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById('my_modal_3').showModal()}
      >
        Event-Name +++++ Event-Date
      </button>
      <dialog
        id="my_modal_3"
        className="modal"
      >
        <div className="modal-box ">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="card bg-base-100 w-96 shadow-xl justify-center align-middle ">
            <div className="card-body justify-center">
              <h2 className="card-title">
                Eventtitel
                <div className="badge badge-secondary">WOW</div>
              </h2>
              <p>Eventdescription</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Location</div>
                <div className="badge badge-outline">Eventdatum</div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default EventDetails;
