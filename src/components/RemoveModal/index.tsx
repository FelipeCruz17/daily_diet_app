import { Button } from '@components/Button';
import { Modal, View } from 'react-native';
import { Overlay, ModaBody, ModalTitle, ButtonContainer } from './styles';

export function RemoveModal() {
  return (
    <Modal>
      <Overlay>
        <ModaBody>

          <ModalTitle>
            Deseja realmente excluir o registro da refeição?
          </ModalTitle>

          <ButtonContainer>
            <Button
              title='Cancelar'
              variant='SECONDARY'
            />

            <View style={{
              width: 14
            }}/>

            <Button
              title='Sim, excluir'
              variant='PRIMARY'
            />
          </ButtonContainer>

        </ModaBody>
      </Overlay>
    </Modal>
  );
}
