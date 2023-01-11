import create from 'zustand';

type Zustand = {
  currentStep: number;
  completed: boolean;
  status: string;
  uploadedImage: number;
  panStatus: number;
  fetchData: boolean;
  finish: boolean;
  panStatusResult: string;
  capturelocation: number;
  capturelocationData: any | null;
  imge: any | null;
  setImg: (input: any) => void;
  setCapturelocationData: (input: object) => void;
  setCapturelocation: (input: number) => void;
  setPanStatusResult: (input: string) => void;
  setFinish: (input: boolean) => void;
  setFetchData: (input: boolean) => void;
  setPanStatus: (input: number) => void;
  setUploadedImage: (input: number) => void;
  setStatus: (input: string) => void;
  setCompleted: (input: boolean) => void;
  setCurrentStep: (input: number) => void;
  cameraStatus: boolean;
  manageVeriyStep: number;
  setCameraStatus: (input: boolean) => void;
  setManageVeriyStep: () => void;
  setManageVeriyStepback: () => void;
  setManageVeriyStepinital: () => void;
};

export const useStore = create<Zustand>((set) => ({
  currentStep: 0,
  completed: false,
  status: 'In Progress',
  uploadedImage: 0,
  panStatus: 0,
  fetchData: false,
  finish: false,
  panStatusResult: 'Good Match',
  capturelocation: 0,
  capturelocationData: {},
  imge: null,
  setImg: (input: any) => set(() => ({ imge: input })),
  setCapturelocationData: (input: any) => set(() => ({ capturelocationData: input })),
  setCapturelocation: (input: number) => set(() => ({ capturelocation: input })),
  setPanStatusResult: (input: string) => set(() => ({ panStatusResult: input })),
  setFinish: (input: boolean) => set(() => ({ finish: input })),
  setFetchData: (input: boolean) => set(() => ({ fetchData: input })),
  setPanStatus: (input: number) => set(() => ({ panStatus: input })),
  setUploadedImage: (input: number) => set(() => ({ uploadedImage: input })),
  setStatus: (input: string) => set(() => ({ status: input })),
  setCompleted: (input: boolean) => set(() => ({ completed: input })),
  setCurrentStep: (input: number) => set(() => ({ currentStep: input })),
  cameraStatus: false,
  manageVeriyStep: 0,
  setManageVeriyStep: () => set((state) => ({ manageVeriyStep: state.manageVeriyStep + 1 })),
  setManageVeriyStepback: () => set((state) => ({ manageVeriyStep: state.manageVeriyStep - 1 })),
  setManageVeriyStepinital: () => set((state) => ({ manageVeriyStep: state.manageVeriyStep })),
  setCameraStatus: (input: boolean) => set(() => ({ cameraStatus: input }))
}));
