import { theme } from "@/styles/theme";
import { Link } from "react-router-dom";
import { keyframes, styled } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

 export const PageContainer = styled.div`
  padding: ${theme.spacings.large} ${theme.spacings.medium};
  animation: ${fadeIn} 0.8s ease-out;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: ${theme.fontSizes.xxlarge};
  color: ${theme.colors.primary};
  text-align: center;
  margin-bottom: ${theme.spacings.xlarge};
  font-family: ${theme.fonts.heading};
`;

export const EventGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: ${theme.spacings.large};
`;

export const EventCard = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.5s ease-out forwards;
  opacity: 0;
  animation-delay: calc(var(--card-index) * 0.1s);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  }
`;

export const CardImageContainer = styled.div`
  width: 100%;
  height: 220px;
  overflow: hidden;
  background-color: ${theme.colors.lightBlueGray}; // Placeholder color
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${EventCard}:hover & {
    transform: scale(1.05);
  }
`;

export const CardContent = styled.div`
  padding: ${theme.spacings.medium};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const EventDate = styled.p`
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.secondary};
  font-weight: 600;
  margin-bottom: ${theme.spacings.xsmall};
  text-transform: uppercase;
`;

export const EventTitle = styled.h3`
  font-size: ${theme.fontSizes.xlarge};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacings.small};
  font-family: ${theme.fonts.heading};
  line-height: 1.3;
`;

export const EventDescription = styled.p`
  font-size: ${theme.fontSizes.medium};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacings.medium};
  line-height: 1.6;
  flex-grow: 1;
`;

export const EventLocation = styled.p`
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.mediumGray};
  margin-bottom: ${theme.spacings.medium};
`;

export const SaibaMaisButton = styled(Link)`
  display: inline-block;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: ${theme.spacings.small} ${theme.spacings.medium};
  border-radius: 4px;
  text-decoration: none;
  text-align: center;
  font-weight: 600;
  transition: background-color 0.3s ease;
  margin-top: auto; 

  &:hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.secondary};
  }
`;

export const LoadingText = styled.p`
  text-align: center;
  font-size: ${theme.fontSizes.large};
  color: ${theme.colors.primary};
  padding: ${theme.spacings.xlarge};
`;

export const ErrorText = styled.p`
  text-align: center;
  font-size: ${theme.fontSizes.large};
  color: red;
  padding: ${theme.spacings.xlarge};
`;