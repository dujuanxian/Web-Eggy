// https://sweetalert2.github.io/#examples
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);

function successAlert() {
  return MySwal.fire({
    icon: 'success',
    title: 'Congratulations! Great job you have done!',
    confirmButtonColor: 'mediumseagreen',
    confirmButtonText: 'New Level'
  });
}

function errorAlert() {
  return MySwal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Try again!',
    showConfirmButton: false,
    timer: 1500
  });
}

export {
  successAlert,
  errorAlert
}


