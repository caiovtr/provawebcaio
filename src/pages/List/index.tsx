import * as S from './styles'
import {descr} from "../../dados/desc"
import { ComponentCard } from '../../components'

export function List() {
  return (
    <S.Section>
      {descr.map(item => (
        <ComponentCard
          texto={item}
        />
      ))}
    </S.Section>
  )
}
