import { AbstractControl } from "@angular/forms";

export function appleMail(control:AbstractControl){
    if (control.value.includes('@apple.com')) {
        return null;
    } else {
        return { 'appleMail':'Please use apple mail only'}
    }
}