import CartButton from "./CartButton";

export default function Price({
  price,
  isOnsale,
  salePercent,
  id,
  title,
  image,
}: {
  price: number;
  isOnsale: boolean | null;
  salePercent?: number | null;
  id: string;
  title: string;
  image: string;
}) {
  const sale = isOnsale;
  const salePrice = price * (1 - (salePercent || 0) / 100);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="text-[26px] black">
          {sale ? (
            <div className="w-max flex gap-2">
              {
                <>
                  <div className="extrabold text-[26px]">
                    ${salePrice.toFixed(2)}
                  </div>
                  <div className="extrabold text-[18px] opacity-25 top-0 right-[-80%] line-through">
                    ${price}
                  </div>
                  <div className="bg-[#ED0006] semibold text-sm px-[10px] py-[10px] text-white">
                    SALE
                  </div>
                </>
              }
            </div>
          ) : (
            <div className="font-extrabold text-[26px]">${price}</div>
          )}
        </div>
        <div className="text-[#31BA27] extrabold text-[16px]">IN STOCK</div>
      </div>
      <CartButton
        id={id}
        price={sale ? salePrice : price}
        title={title}
        image={image}
      />
    </div>
  );
}
