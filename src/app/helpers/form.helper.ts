import {   
  REACTIVE_FORM_DIRECTIVES,  
  FormBuilder,  
  FormGroup,
  FormControl
} from '@angular/forms';

export class FormHelper{
    
    /**
     * RC4 Regression. Input takes the form group as 
     * default value...
     * 
     * @param  {FormBuilder} builder       
     * @param  {any}         controlsConfig
     * @return {FormGroup}                 
     */
    static group(builder: FormBuilder, controlsConfig:any): FormGroup{

        var form = builder.group(controlsConfig);
        for (var i in form.controls) {
          (<FormControl>form.controls[i]).updateValue('', { onlySelf: true })
        }

        return form;
    }
}