import React from "react"
import { Outlet } from "react-router-dom"
import { ComponentHeader,Lateral} from "../../components"
import * as S from "./styles"

export function Layout() {
  return (
    <>
    <ComponentHeader/>
      <Lateral/>
      <S.Main>
        <Outlet />
      </S.Main>
    </>
  )
}
