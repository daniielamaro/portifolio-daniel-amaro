import Swal from 'sweetalert2'

export class Alertas {
  constructor() { }

  erro(message: string): any {
    return Swal.fire({
        position: 'center',
        title: 'Oops ...',
        icon: 'error',
        text: message
      });
  }

  sucesso(message: string): any {
    return Swal.fire({
        position: 'center',
        title: 'Sucesso',
        icon: 'success',
        text: message
      });
  }

  warning(message: string): any {
    return Swal.fire({
        position: 'center',
        title: 'Cuidado!',
        icon: 'warning',
        text: message
      });
  }

  warningAlert(message: string): any {
    return Swal.fire({
      position: 'center',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
      icon: 'warning',
      title: 'Atenção!',
      text: message
    });
  }

  whatsapp(): void {
    Swal.fire({
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
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Copiado!',
          'O número foi copiado para a área de transferencia',
          'success'
        )
        
        let inputTest = document.createElement("input");
        inputTest.value = "+5521974574753";
        document.body.appendChild(inputTest);
        inputTest.select();
        document.execCommand('copy');
        document.body.removeChild(inputTest);
      }
    });
  }
}
