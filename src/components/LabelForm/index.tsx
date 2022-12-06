import { LabelText } from './styles';

interface LabelFormProps {
  label: string
}

export function LabelForm({ label }: LabelFormProps) {
  return (
    <LabelText>
      {label}
    </LabelText>
  );
}
