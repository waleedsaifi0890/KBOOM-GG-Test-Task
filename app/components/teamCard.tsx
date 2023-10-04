export default function TeamCard({ team }: any) {
  return (
    <div className="border border-[#587481] rounded p-3 mt-6">
      <div className="flex items-center gap-3">
        <img src="/assets/avatar.svg" />
        <p className="text-base text-secondary">{team}</p>
      </div>

      <div className="mt-3 flex items-center ">
        <div className="h-7 w-7 rounded-md bg-secondary text-center flex items-center justify-center mr-[-7px]">
          <p className="text-black font-semibold text-[14px]">7</p>
        </div>
        <div className="w-full h-5 bg-[#2B5D68] rounded-md border-2 border-secondary ">
          <div
            className="h-full bg-secondary flex items-center"
            style={{ width: "15%" }}
          >
            <p className="text-white text-[10px] ml-3 font-bold">268/1000</p>
          </div>
        </div>
      </div>

      <div className="flex mt-4 justify-between">
        <div className="flex items-center relative">
          <img src="/assets/goldCoin.svg" className="mr-[-14px] z-10 " />
          <img
            src="/assets/plus.svg"
            className="absolute top-[-4px] z-20 left-4"
          />

          <div className="border border-[#587481] flex items-center rounded-md h-[22px]">
            <p className="font-semibold pl-4 pr-2 text-[12px]">12,897</p>
          </div>
        </div>
        <div className="flex items-center relative">
          <img src="/assets/rewards.svg" className="mr-[-14px] z-10 " />
          <img
            src="/assets/plus.svg"
            className="absolute top-[-4px] z-20 left-4"
          />

          <div className="border border-[#587481] flex items-center rounded-md h-[22px]">
            <p className="font-semibold pl-4 pr-2 text-[12px]">322</p>
          </div>
        </div>

        <div className="flex items-center relative">
          <img
            src="/assets/group.svg"
            className="mr-[-14px] z-10 mt-[-12px] "
          />
          <img
            src="/assets/plus.svg"
            className="absolute top-[-4px] z-20 left-[17px]"
          />

          <div className="border border-[#587481] flex items-center rounded-md h-[22px]">
            <p className="font-semibold pl-4 pr-2 text-[12px]">2/5</p>
          </div>
        </div>
      </div>
    </div>
  );
}
