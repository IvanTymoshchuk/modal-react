import { useState } from 'react';
import { Modal } from './Modal';

export const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', marginTop: '200px' }}
    >
      <button
        onClick={toggleModal}
        style={{ color: 'black', backgroundColor: 'red', padding: '20px' }}
      >
        Click me
      </button>
      {isModalOpen && (
        <Modal openModal={toggleModal}>
          <div>
            <h2>Hello , it's open modal</h2>
          </div>
        </Modal>
      )}
    </div>
  );
};
