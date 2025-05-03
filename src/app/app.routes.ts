import { Routes } from '@angular/router';
import { ToursComponent } from './home/components/tours/tours.component';
import { ContentComponent } from './home/layout/content/content.component';
import { RecorridoenRiohachaComponent } from './home/pages/recorridoen-riohacha/recorridoen-riohacha.component';
import { PasadiaCaboDeLaVelaComponent } from './home/pages/pasadia-cabo-de-la-vela/pasadia-cabo-de-la-vela.component';
import { CaboDeLaVelaDosDiasUnaNocheComponent } from './home/pages/cabo-de-la-vela-dos-dias-una-noche/cabo-de-la-vela-dos-dias-una-noche.component';
import { CaboDeLaVelaTresDiasDosNochesComponent } from './home/pages/cabo-de-la-vela-tres-dias-dos-noches/cabo-de-la-vela-tres-dias-dos-noches.component';
import { CaboDeLaVelaYPuntaGallinaDosDiasUnaNocheComponent } from './home/pages/cabo-de-la-vela-ypunta-gallina-dos-dias-una-noche/cabo-de-la-vela-ypunta-gallina-dos-dias-una-noche.component';
import { CaboDeLaVelaYPuntaGallinaTresDiasDosNochesComponent } from './home/pages/cabo-de-la-vela-ypunta-gallina-tres-dias-dos-noches/cabo-de-la-vela-ypunta-gallina-tres-dias-dos-noches.component';
import { CaboDeLaVelaPuntaGallinaMayapoCuatroDiasTresNochesComponent } from './home/pages/cabo-de-la-vela-punta-gallina-mayapo-cuatro-dias-tres-noches/cabo-de-la-vela-punta-gallina-mayapo-cuatro-dias-tres-noches.component';
import { CaboDeLaVelaPuntaGallinaMayapoCamaronesCincoDiasCuatroNochesComponent } from './home/pages/cabo-de-la-vela-punta-gallina-mayapo-camarones-cinco-dias-cuatro-noches/cabo-de-la-vela-punta-gallina-mayapo-camarones-cinco-dias-cuatro-noches.component';
import { TardeDeRancheriaComponent } from './home/pages/tarde-de-rancheria/tarde-de-rancheria.component';
import { PasadiaPalominoComponent } from './home/pages/pasadia-palomino/pasadia-palomino.component';
import { PasadiaCamaronesComponent } from './home/pages/pasadia-camarones/pasadia-camarones.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { CrearReservaComponent } from './home/components/crear-reserva/crear-reserva.component';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: ContentComponent },
  { path: 'tours', component: ToursComponent },
  { path: 'recorridoenriohacha', component: RecorridoenRiohachaComponent },
  { path: 'pasadiacabodelavela', component: PasadiaCaboDeLaVelaComponent },
  { path: 'cabodelaveladosdiasunanoche', component: CaboDeLaVelaDosDiasUnaNocheComponent },
  { path: 'cabodelavelatresdiasdosnoches', component: CaboDeLaVelaTresDiasDosNochesComponent },
  { path: 'cabodelavelaypuntagallinadosdiasunanoche', component: CaboDeLaVelaYPuntaGallinaDosDiasUnaNocheComponent },
  { path: 'cabodelavelaypuntagallinatresdiasdosnoches', component: CaboDeLaVelaYPuntaGallinaTresDiasDosNochesComponent },
  { path: 'cabodelavelapuntagallinacuatrodiasdrestresnoches', component: CaboDeLaVelaPuntaGallinaMayapoCuatroDiasTresNochesComponent },
  { path: 'cabodelavelapuntagallinacamaronescincodiascuatronoches', component: CaboDeLaVelaPuntaGallinaMayapoCamaronesCincoDiasCuatroNochesComponent },
  { path: 'tarde-de-rancheria', component: TardeDeRancheriaComponent },
  { path: 'pasadiapalomino', component: PasadiaPalominoComponent },
  { path: 'pasadiacamarones', component: PasadiaCamaronesComponent },
  { path: 'crear-reserva', component: CrearReservaComponent },
   
 
 
];