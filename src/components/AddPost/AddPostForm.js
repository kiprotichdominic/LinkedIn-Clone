import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './AddPostForm.css'

function AddPostForm() {
  return (
    <div className="addpostform">
      <div class="d-flex flex-row">
        <div class="p-2">
          <img src="https://bit.ly/3NSgrua" className='addpostform-userimage' alt="" />
        </div>
        <div class="p-2">
          <input type="text" class="form-control addpostform-input" placeholder="Start a post" />
        </div>
      </div>
    </div>
  );
}

export default AddPostForm;