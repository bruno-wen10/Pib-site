// import { theme } from "@/styles/theme";
// import { Link } from "react-router-dom";
// import { keyframes, styled } from "styled-components";

// export const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// export const PageContainer = styled.div`
//   padding: ${theme.spacings.large} ${theme.spacings.medium};
//   animation: ${fadeIn} 0.8s ease-out;
//   max-width: 450px;
//   margin: ${theme.spacings.xlarge} auto;
//   background-color: ${theme.colors.white};
//   border-radius: 8px;
//   box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
// `;

// export const Title = styled.h1`
//   font-size: ${theme.fontSizes.xxlarge};
//   color: ${theme.colors.primary};
//   font-family: ${theme.fonts.heading};
//   text-align: center;
//   margin-bottom: ${theme.spacings.large};
// `;

// export const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: ${theme.spacings.medium};
// `;

// export const FormGroup = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// export const Label = styled.label`
//   font-size: ${theme.fontSizes.medium};
//   color: ${theme.colors.text};
//   margin-bottom: ${theme.spacings.xsmall};
//   font-weight: 600;
//   display: flex;
//   align-items: center;
//   svg {
//     margin-right: ${theme.spacings.xsmall};
//     color: ${theme.colors.secondary};
//   }
// `;

// export const Input = styled.input`
//   padding: ${theme.spacings.small}; // Um pouco mais de padding
//   border: 1px solid ${theme.colors.lightGray};
//   border-radius: 4px;
//   font-size: ${theme.fontSizes.medium};
//   font-family: ${theme.fonts.main};
//   transition: border-color 0.3s ease, box-shadow 0.3s ease;

//   &:focus {
//     border-color: ${theme.colors.primary};
//     outline: none;
//     box-shadow: 0 0 0 3px ${theme.colors.primary}40; // Sombra de foco mais suave
//   }
// `;

// export const SubmitButton = styled.button`
//   background-color: ${theme.colors.primary};
//   color: ${theme.colors.white};
//   padding: ${theme.spacings.medium};
//   border: none;
//   border-radius: 4px;
//   font-size: ${theme.fontSizes.large};
//   font-weight: 600;
//   cursor: pointer;
//   transition: background-color 0.3s ease, transform 0.2s ease;
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   margin-top: ${theme.spacings.small};

//   svg {
//     margin-right: ${theme.spacings.small};
//   }

//   &:hover {
//     background-color: ${theme.colors.secondary};
//     transform: translateY(-2px);
//   }

//   &:disabled {
//     background-color: ${theme.colors.mediumGray};
//     cursor: not-allowed;
//     transform: none;
//   }
// `;

// export const AltLink = styled(Link)`
//   color: ${theme.colors.primary};
//   text-decoration: none;
//   font-weight: 600;
//   text-align: center;
//   display: block;
//   margin-top: ${theme.spacings.medium};
//   transition: color 0.3s ease;

//   &:hover {
//     color: ${theme.colors.secondary};
//     text-decoration: underline;
//   }
// `;

// export const ErrorMessage = styled.p`
//   color: red;
//   font-size: ${theme.fontSizes.small};
//   text-align: center;
//   margin-top: ${theme.spacings.small};
// `;