import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Success = () => {
  return (
    <div className='success__title'>
      <FontAwesomeIcon icon="fa-check" />
      <h1>Congratulations, Eren</h1>
      <p>You are completed onboarding, you can start using the Eden!</p>
      <button>
        Launch Eden
      </button>
    </div>
  )
}

export default Success;