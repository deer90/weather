import {NgModule} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";

const MATERIAL_MODULES = [
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatIconModule
]

@NgModule({
    imports: [
        ...MATERIAL_MODULES
    ],
    exports: [
        ...MATERIAL_MODULES
    ]
})
export class MaterialModule {
}
