import { AbstractControl, ValidatorFn, FormGroup } from '@angular/forms';

// Função de validação para verificar se as senhas correspondem
export function ValidationPassword(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const senha = control.get('senha')?.value;
    const senha2 = control.get('senha2')?.value;

    if (senha !== senha2) {
        console.log("SENHA NAO SAO IGUIAS")
      return { senhasNaoCorrespondem: true };
      
    }
    console.log("Senhas IGUAIS")
    return null;
  };
}