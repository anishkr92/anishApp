import styled from "styled-components"
import InfoCardItem from "../subComponents/InfoCardItem"

export const InfoCardContainer = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid coral;
  align-items: flex-start;
  padding: 16px;
`

export const StyledInfoCardItem = styled(InfoCardItem)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: baseline;
  padding: 8px 0px;
`

export const InfoCardItemTitle = styled.label`
  width: 150px;
  font-size: 14px;
  font-weight: 500;
  align-self: baseline;
`

export const InfoCardItemInternalSeparator = styled.label`
  font-size: 14px;
  font-weight: 500;
  align-self: baseline;
  margin-left: 2px;
`
export const InfoCardItemValue = styled.label`
  font-size: 16px;
  font-weight: 700;
  align-self: baseline;
  margin-left: 12px;
`
