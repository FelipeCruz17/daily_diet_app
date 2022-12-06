import { TextInputProps, TextInput } from 'react-native';
import { InputContainer } from './styles';
import { useTheme } from 'styled-components/native';

interface InputFormProps extends TextInputProps {
  inputRef?: React.RefObject<TextInput>
}

export function InputForm({ inputRef, ...rest }:InputFormProps) {
  const { COLORS } = useTheme();

  return (
    <InputContainer
      ref={inputRef}
      placeholderTextColor={COLORS.BASE_GRAY_100}
      {...rest}
    />
  );
}
