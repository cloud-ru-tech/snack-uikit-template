import { Stepper, StepperProps } from '@snack-uikit/stepper';

const STEPPER_STEPS: StepperProps['steps'] = [
  { title: 'Первый шаг' },
  { title: 'Второй шаг' },
  { title: 'Третий шаг' },
].map(step => ({ ...step, description: 'Демонстрация оформления элементов интерфейса' }));

export function StepperDemo() {
  return (
    <Stepper defaultCurrentStepIndex={1} steps={STEPPER_STEPS}>
      {({ stepper }) => stepper}
    </Stepper>
  );
}
