import { formatCurrencyAmount } from "../../utils/";
import { useSelector } from "react-redux";

export const RefuelAmount = ({ src = false }: { src?: boolean }) => {
  const bestRoute = useSelector((state: any) => state.quotes.bestRoute);
  const refuel = bestRoute?.refuel;
  const amount = formatCurrencyAmount(
    src ? refuel?.fromAmount : refuel?.toAmount,
    src ? refuel?.fromAsset?.decimals : refuel?.toAsset?.decimals,
    3
  );

  if (!refuel) return null;

  return (
    <span className="skt-w text-widget-accent text-xs absolute left-0 -bottom-5">
      + {amount} {src ? refuel?.fromAsset?.symbol : refuel?.toAsset?.symbol}
    </span>
  );
};