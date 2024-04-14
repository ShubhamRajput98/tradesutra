export const ModuleHeader = ({ module, subModule }) => {
    return (
        <div className="flex items-center py-2 shadow-sm bg-white border px-6">
            <p className="text-textBlack font-bold">{module}</p>
            {subModule && <>
                <p className="text-textBlack font-bold text-small mx-2">&#10095;</p>
                <p className="text-textBlack font-bold">{subModule}</p>
            </>}
        </div>
    )
}
