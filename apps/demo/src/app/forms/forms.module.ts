import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppSharedModule } from '../app-shared.module'
import { FormsIndexComponent } from './containers/forms-index/forms-index.component';
import { FormsInputImageComponent } from './components/forms-input-image/forms-input-image.component';
import { FormsInputColorComponent } from './components/forms-input-color/forms-input-color.component';
import { FormsInputIconComponent } from './components/forms-input-icon/forms-input-icon.component';
import { FormsInputToggleComponent } from './components/forms-input-toggle/forms-input-toggle.component';
import { FormsFormFieldsetComponent } from './components/forms-form-fieldset/forms-form-fieldset.component'

const routes: Routes = [
  { path: '', component: FormsIndexComponent }
]

@NgModule({
  imports: [
    AppSharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ FormsIndexComponent, FormsInputImageComponent, FormsInputColorComponent, FormsInputIconComponent, FormsInputToggleComponent, FormsFormFieldsetComponent ]
})
export class FormsModule {
}