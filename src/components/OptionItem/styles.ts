import styled from 'styled-components'

interface ContainerProps {
  backgnd: string
}

interface ContainerOptionProps {
  onClick?: any
  opacity?: number
}
const colors = [
  { name: 'Sports', color: '#ddd' },
  { name: 'Science', color: '#ddd' },
  { name: 'Math', color: '#ddd' },
  { name: 'Biology', color: '#ddd' }
]

export const Container = styled.div<ContainerProps>`
  width: 100%;
  border: 1px solid black;
  border-radius: 50px;
  margin: 5px auto;
  background-color: ${({ backgnd }) =>
    colors.map((ele) => (ele.name === backgnd ? ele.color : null))};
`
export const ContainerOption = styled.div<ContainerOptionProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 15px 25px;
  width: 100%;
  opacity: ${(props) => props.opacity}};
`
export const Label = styled.div`
  color: black;
  margin-left: 10px;
  width: 100%;
  height: 100%;
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  padding: 19px;
  border-radius: 20px;
`
