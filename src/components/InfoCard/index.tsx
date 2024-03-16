import React, { FC } from "react"
import { InfoCardContainer, StyledInfoCardItem } from "./styledComponents"
import { InfoCardProps } from "./types"

const InfoCard: FC<InfoCardProps> = (props) => {
  return (
    <InfoCardContainer {...props}>
      <StyledInfoCardItem itemTitle="Name" itemValue="Anish Kumar" />
      <StyledInfoCardItem itemTitle="Organization" itemValue="Tricog Health" />
      <StyledInfoCardItem
        itemTitle="Designation"
        itemValue="Associate Mobile Architect"
      />
      <StyledInfoCardItem itemTitle="Experience" itemValue="10+ years" />
      <StyledInfoCardItem
        itemTitle="Technical Skills"
        itemValue="iOS (Swift), React Native, .NET (C#), React, Windows Apps (C#)"
      />
      <StyledInfoCardItem
        itemTitle="Interests"
        itemValue="Table Tennis, Football, PC Gaming (Dota, CS:GO, ...)"
      />
    </InfoCardContainer>
  )
}

export default InfoCard
