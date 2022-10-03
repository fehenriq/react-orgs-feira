import Login from "pages/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import Feira from "pages/Feira";
import Carrinho from "pages/Carrinho";
import { useState } from "react";

function Router() {
  const [nome, setNome] = useState("");
  const [saldo, setSaldo] = useState(0)

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login nome={nome} setNome={setNome} saldo={saldo} setSaldo={setSaldo}/>
        </Route>
        <Route path="/feira">
          <Feira />
        </Route>
        <Route path="/carrinho">
          <Carrinho />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;