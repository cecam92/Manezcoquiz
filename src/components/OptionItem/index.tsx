import React from 'react'
import { Container, Label, IconContainer, ContainerOption } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
interface OptionItemProps {
  icon?: any
  label: string
  onClick?: any
  disabled?: boolean
}

const OptionItem = ({ icon, label, onClick, disabled }: OptionItemProps) => {
  const opacity = disabled ? 0.5 : 1
  return (
    <Container backgnd={label}>
      <ContainerOption onClick={onClick} opacity={opacity}>
        {icon && (
          <IconContainer>
            <FontAwesomeIcon icon={icon} />
          </IconContainer>
        )}
        <Label>{label}</Label>
      </ContainerOption>
    </Container>
  )
}

export default OptionItem
