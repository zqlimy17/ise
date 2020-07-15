/// <reference types="react-scripts" />

type ProductType = {
    image: string;
    price: string;
    currency: string;
    name: string;
};

interface CartRowProps {
    item: ProductType;
    index: number;
    change: boolean;
    setChange: React.Dispatch<React.SetStateAction<boolean>>;
    removeFromCart: (index: number) => void;
}
