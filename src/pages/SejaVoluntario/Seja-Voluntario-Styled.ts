// import { theme } from "@/styles/theme";
// import { keyframes, styled } from "styled-components";







// export const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// export const PageContainer = styled.div`
//   padding: ${theme.spacings.large} ${theme.spacings.medium};
//   animation: ${fadeIn} 0.8s ease-out;
//   max-width: 800px;
//   margin: ${theme.spacings.large} auto;
//   background-color: ${theme.colors.white};
//   border-radius: 8px;
//   box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
// `;

// export const HeaderSection = styled.div`
//   text-align: center;
//   margin-bottom: ${theme.spacings.large};
// `;

// export const Title = styled.h1`
//   font-size: ${theme.fontSizes.xxlarge};
//   color: ${theme.colors.primary};
//   font-family: ${theme.fonts.heading};
//   margin-bottom: ${theme.spacings.small};
// `;

// export const Subtitle = styled.p`
//   font-size: ${theme.fontSizes.large};
//   color: ${theme.colors.text};
//   max-width: 700px;
//   margin: 0 auto ${theme.spacings.medium} auto;
//   line-height: 1.6;
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
//   padding: ${theme.spacings.small};
//   border: 1px solid ${theme.colors.lightGray};
//   border-radius: 4px;
//   font-size: ${theme.fontSizes.medium};
//   font-family: ${theme.fonts.main};
//   transition: border-color 0.3s ease;

//   &:focus {
//     border-color: ${theme.colors.primary};
//     outline: none;
//     box-shadow: 0 0 0 2px ${theme.colors.primary}30;
//   }
// `;

// export const Select = styled.select`
//   padding: ${theme.spacings.small};
//   border: 1px solid ${theme.colors.lightGray};
//   border-radius: 4px;
//   font-size: ${theme.fontSizes.medium};
//   font-family: ${theme.fonts.main};
//   background-color: white;
//   transition: border-color 0.3s ease;

//   &:focus {
//     border-color: ${theme.colors.primary};
//     outline: none;
//     box-shadow: 0 0 0 2px ${theme.colors.primary}30;
//   }
// `;

// export const Textarea = styled.textarea`
//   padding: ${theme.spacings.small};
//   border: 1px solid ${theme.colors.lightGray};
//   border-radius: 4px;
//   font-size: ${theme.fontSizes.medium};
//   font-family: ${theme.fonts.main};
//   min-height: 120px;
//   resize: vertical;
//   transition: border-color 0.3s ease;

//   &:focus {
//     border-color: ${theme.colors.primary};
//     outline: none;
//     box-shadow: 0 0 0 2px ${theme.colors.primary}30;
//   }
// `;

// export const ButtonGroup = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   gap: ${theme.spacings.small};
//   margin-top: ${theme.spacings.medium};
// `;

// export const SubmitButton = styled.button`
//   background-color: ${theme.colors.primary};
//   color: ${theme.colors.white};
//   padding: ${theme.spacings.small} ${theme.spacings.medium};
//   border: none;
//   border-radius: 4px;
//   font-size: ${theme.fontSizes.medium};
//   font-weight: 600;
//   cursor: pointer;
//   transition: background-color 0.3s ease, transform 0.2s ease;
//   display: inline-flex;
//   align-items: center;

//   svg {
//     margin-right: ${theme.spacings.xsmall};
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

// export const ErrorMessage = styled.p`
//   color: red;
//   font-size: ${theme.fontSizes.small};
//   text-align: center;
//   margin-top: ${theme.spacings.small};
// `;

// export const SuccessMessage = styled.p`
//   color: green;
//   font-size: ${theme.fontSizes.medium};
//   text-align: center;
//   margin-top: ${theme.spacings.small};
// `;

// // Funções de interesse
// export const FuncoesGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: ${theme.spacings.xsmall};
//   margin-top: ${theme.spacings.small};
// `;

// export const FuncaoOption = styled.label`
//   display: flex;
//   align-items: center;
//   padding: ${theme.spacings.xsmall} ${theme.spacings.small};
//   border: 1px solid ${theme.colors.lightGray};
//   border-radius: 4px;
//   font-size: ${theme.fontSizes.medium};
//   font-family: ${theme.fonts.main};
//   cursor: pointer;
//   transition: all 0.2s ease;

//   input {
//     margin-right: ${theme.spacings.small};
//     accent-color: ${theme.colors.primary};
//     cursor: pointer;
//   }

//   &:hover {
//     background-color: ${theme.colors.primary}10;
//     border-color: ${theme.colors.primary};
//   }
// `;
