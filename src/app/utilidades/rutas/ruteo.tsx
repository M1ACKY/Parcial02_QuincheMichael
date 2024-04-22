import { Route, Routes } from "react-router-dom";

import { Inicio } from "../../componentes/contenedor/Inicio";
import { CancionCrear } from "../../componentes/canciones/CancionCrear";
import { CancionListar } from "../../componentes/canciones/CancionListar";
import { CancionAdmin } from "../../componentes/canciones/CancionAdmin";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="/camcre" element={<CancionCrear />} />
      <Route path="/camlis" element={<CancionListar />} />
      <Route path="/camadm" element={<CancionAdmin />} />

      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
};
