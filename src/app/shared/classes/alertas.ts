import Swal from 'sweetalert2'

export class Alertas {
  constructor() { }

//   erro(message: string): any {
//     return swal({
//         position: 'center',
//         title: 'Oops ...',
//         type: 'error',
//         text: message
//       });
//   }

//   sucesso(message: string): any {
//     return swal({
//         position: 'center',
//         title: 'Sucesso',
//         type: 'success',
//         text: message
//       });
//   }

//   warning(message: string): any {
//     return swal({
//         position: 'center',
//         title: 'Cuidado!',
//         type: 'warning',
//         text: message
//       });
//   }

//   warningAlert(message: string): any {
//     return swal({
//       position: 'center',
//       showCancelButton: true,
//       confirmButtonText: 'Sim',
//       cancelButtonText: 'Não',
//       type: 'warning',
//       title: 'Atenção!',
//       text: message
//     });
//   }

  whatsapp(): any {
    return Swal.fire({
        position: 'center',
        title: '<strong>Meu whatsapp</strong>',
        icon: 'info',
        html:
            'Me liga ou manda mensagem :D <br/>' +
            '<strong>+55 (21) 97457-4753</strong>',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Copiar número',
        confirmButtonAriaLabel: 'Irei ligar, legal!',
        cancelButtonText:
            '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Deixa pra lá...'
    });
  }
}
