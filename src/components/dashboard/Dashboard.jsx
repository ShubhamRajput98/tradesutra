import { ModuleHeader } from '../common/moduleHeader/ModuleHeader'
import { AnyliticsCard } from '../common/anyliticsCard/AnyliticsCard'
import { BagIcon, GameRemoteIcon, HandBagIcon, HeartIcon } from '../common/icons/Icons'
import { AreaChart } from '../common/areaChart/AreaChart'
import { DoughnutChart } from '../common/doughnutChart/DoughnutChart'


export const Dashboard = () => {
    return (
        <div className="flex flex-[0.85] flex-col overflow-hidden bg-bgModulePage">
            <ModuleHeader module={"Dashboard"} />

            <section className="h-full w-full scrollBox p-3 flex-1flex overflow-auto border-bgModulePage">
                <div className="anylitics-card flex flex-wrap gap-5 mb-3">
                    <AnyliticsCard Icon={HeartIcon} color={"#eff4ff"} number={"178+"} text={"New User"} />
                    <AnyliticsCard Icon={GameRemoteIcon} color={"#fff7e1"} number={"190+"} text={"Active Calls"} />
                    <AnyliticsCard Icon={HandBagIcon} color={"#fff4f0"} number={"12+"} text={"Trader Clinic"} />
                    <AnyliticsCard Icon={BagIcon} color={"#fff4f0"} number={"18+"} text={"Staff "} />

                </div>

                <div className="flex flex-wrap gap-4">
                    <div className="line-chat p-3 bg-white h-[470px] w-[59%] rounded-lg">
                        <div className='text-major text-textBlack font-heading p-3'>Reports</div>
                        <AreaChart />
                    </div>
                    <div className="line-chat flex justify-center items-center flex-col px-3 py-10 bg-white h-[470px] w-[39.8%] rounded-lg">
                        <div className='text-major p-3 flex-1 w-full'>
                            <p className='text-textBlack font-heading'>Analytics</p>
                        </div>
                        <DoughnutChart />
                    </div>
                </div>
            </section>
        </div>

    )
}
