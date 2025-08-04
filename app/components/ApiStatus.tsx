interface ApiStatusProps {
    isLoading: boolean;
    lastUpdated: string;
    isOnline: boolean;
}

export default function ApiStatus({ isLoading, lastUpdated, isOnline }: ApiStatusProps) {
    return (
        <div className="flex items-center justify-center space-x-2 text-xs text-amber-700 bg-amber-50 rounded-lg p-3 border border-amber-200">
            <div className={`w-3 h-3 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'} animate-pulse`}></div>
            <span>
                {isLoading ? 'กำลังโหลดข้อมูล...' :
                    isOnline ? `อัพเดทล่าสุด: ${lastUpdated}` : 'ไม่สามารถเชื่อมต่อ API ได้'}
            </span>
        </div>
    );
} 