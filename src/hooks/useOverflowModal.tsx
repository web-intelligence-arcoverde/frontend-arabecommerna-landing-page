//********O componente recebe 2 parâmetros o do estado , e uma função pra fechar o modal *************/

import { useEffect } from 'react';

function useModalOverflow(isOpen: boolean, onClose?: () => void,idElement?:any) {
  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    function setOverflow(value: string) {
      document.body.style.overflow = value;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape' && onClose && isOpen) {
        onClose();
      }
    }

    function handleClick(event: MouseEvent) {
      const modal = document.querySelector(`#${idElement}`);
      console.log(event)

      if (isOpen && modal && !modal.contains(event.target as Node)) {
        onClose && onClose();
      }
    }

    setOverflow(isOpen ? 'hidden' : 'auto');
    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClick);

    const body = document.querySelector('body');
    if (isOpen && body) {
      body.classList.add('modal-open');
    }

    return () => {
      setOverflow('auto');
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClick);
      if (body) {
        body.classList.remove('modal-open');
      }
    };
  }, [isOpen, onClose]);
}

export default useModalOverflow;
