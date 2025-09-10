import { theme } from "@/styles/theme";
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
  max-width: 900px;
  margin: 0 auto;
`;

export const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacings.xlarge};
`;

export const Title = styled.h1`
  font-size: ${theme.fontSizes.xxlarge};
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.heading};
  margin-bottom: ${theme.spacings.small};
`;

export const Subtitle = styled.p`
  font-size: ${theme.fontSizes.large};
  color: ${theme.colors.text};
  max-width: 700px;
  margin: 0 auto ${theme.spacings.medium} auto;
  line-height: 1.6;
`;

export const ContributionSection = styled.section`
  background-color: ${theme.colors.white};
  padding: ${theme.spacings.large};
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.07);
  margin-bottom: ${theme.spacings.large};
  animation: ${fadeIn} 0.5s ease-out forwards;
  opacity: 0;
  animation-delay: 0.2s;
`;

export const SectionTitle = styled.h2`
  font-size: ${theme.fontSizes.xlarge};
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.heading};
  margin-bottom: ${theme.spacings.medium};
  border-bottom: 2px solid ${theme.colors.secondary};
  padding-bottom: ${theme.spacings.xsmall};
  display: inline-block;
`;

export const BankInfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${theme.spacings.large};
  margin-bottom: ${theme.spacings.large};
`;

export const InfoCard = styled.div`
  background-color: ${theme.colors.lightBlueGray}20; // Light background
  padding: ${theme.spacings.medium};
  border-radius: 6px;
  border: 1px solid ${theme.colors.lightGray};

  h4 {
    font-size: ${theme.fontSizes.large};
    color: ${theme.colors.secondary};
    margin-bottom: ${theme.spacings.small};
    display: flex;
    align-items: center;
    svg {
      margin-right: ${theme.spacings.xsmall};
    }
  }

  p {
    font-size: ${theme.fontSizes.medium};
    color: ${theme.colors.text};
    line-height: 1.7;
    margin-bottom: ${theme.spacings.xsmall};
    word-break: break-word;
  }

  strong {
    font-weight: 600;
  }
`;

export const CopyButton = styled.button`
  background-color: ${theme.colors.primary};
  color: white;
  border: none;
  padding: ${theme.spacings.xsmall} ${theme.spacings.small};
  border-radius: 4px;
  cursor: pointer;
  font-size: ${theme.fontSizes.small};
  display: inline-flex;
  align-items: center;
  transition: background-color 0.3s ease;
  margin-top: ${theme.spacings.xsmall};

  svg {
    margin-right: 5px;
  }

  &:hover {
    background-color: ${theme.colors.secondary};
  }
`;

export const QrCodeSection = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacings.large};

  img {
    max-width: 250px;
    height: auto;
    border: 5px solid ${theme.colors.lightGray};
    border-radius: 8px;
    margin: 0 auto ${theme.spacings.small} auto;
  }
`;

export const OtherWaysText = styled.p`
  font-size: ${theme.fontSizes.medium};
  color: ${theme.colors.text};
  text-align: center;
  line-height: 1.6;

  a {
    color: ${theme.colors.primary};
    font-weight: 600;
    text-decoration: underline;
    &:hover {
      color: ${theme.colors.secondary};
    }
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