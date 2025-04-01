import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";

export function SectionCardsLists() {
    const marketData = {
        topGainers: [
            { name: "CORT", price: "$114.22", change: "+59.59 (109.08%)", logo: "C", color: "text-green-600" },
            { name: "MLGO", price: "$24.25", change: "+6.90 (39.77%)", logo: "M", color: "text-green-600" },
            { name: "COOP", price: "$119.60", change: "+15.11 (14.46%)", logo: "C", color: "text-green-600" },
            { name: "VRRM", price: "$22.51", change: "+2.32 (11.49%)", logo: "V", color: "text-green-600" },
        ],
        topLosers: [
            { name: "PCVX", price: "$37.76", change: "-31.70 (-45.64%)", logo: "P", color: "text-red-600" },
            { name: "BHVN", price: "$24.04", change: "-3.61 (-13.06%)", logo: "B", color: "text-red-600" },
            { name: "TNXP", price: "$17.88", change: "-2.30 (-11.38%)", logo: "T", color: "text-red-600" },
            { name: "APLS", price: "$21.87", change: "-2.40 (-9.89%)", logo: "A", color: "text-red-600" },
        ],
        weekHigh: [
            { name: "RLLVF", price: "$0.0060", change: "+0.0000 (0.00%)", logo: "R", color: "text-green-600" },
            { name: "ASTS", price: "$22.74", change: "-1.32 (-5.49%)", logo: "A", color: "text-red-600" },
            { name: "SAFS", price: "$0.0001", change: "+0.0000 (0.00%)", logo: "S", color: "text-green-600" },
            { name: "WGS", price: "$88.57", change: "-3.63 (-3.94%)", logo: "G", color: "text-red-600" },
        ],
        weekLow: [
            { name: "TNXP", price: "$17.88", change: "-2.30 (-11.38%)", logo: "T", color: "text-red-600" },
            { name: "HOPHF", price: "$1.2400", change: "+0.0000 (0.00%)", logo: "H", color: "text-green-600" },
            { name: "QXO", price: "$13.54", change: "-0.22 (-1.60%)", logo: "Q", color: "text-red-600" },
            { name: "MRNA", price: "$28.35", change: "-2.77 (-8.90%)", logo: "M", color: "text-red-600" },
        ],
    };

    return (
        <div className=" rounded-lg p-2 px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                {/* Top Gainers */}
                <Card className="shadow-md bg-white">
                    <CardHeader>
                        <CardTitle>📈 Top Gainers</CardTitle>
                        <CardDescription>Stocks that gained the most today.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {marketData.topGainers.map((stock, index) => (
                            <div key={index} className="flex justify-between items-center border-b last:border-none pb-2 mb-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-sm font-bold">
                                        {stock.logo}
                                    </div>
                                    <div>
                                        <p className="font-medium">{stock.name}</p>
                                        <p className="text-xs text-green-600">{stock.change}</p>
                                    </div>
                                </div>
                                <p className={`font-semibold ${stock.color}`}>{stock.price}</p>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                {/* Top Losers */}
                <Card className="shadow-md bg-white">
                    <CardHeader>
                        <CardTitle>📉 Top Losers</CardTitle>
                        <CardDescription>Stocks that dropped the most today.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {marketData.topLosers.map((stock, index) => (
                            <div key={index} className="flex justify-between items-center border-b last:border-none pb-2 mb-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-sm font-bold">
                                        {stock.logo}
                                    </div>
                                    <div>
                                        <p className="font-medium">{stock.name}</p>
                                        <p className="text-xs text-red-500">{stock.change}</p>
                                    </div>
                                </div>
                                <p className="font-semibold text-red-600">{stock.price}</p>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                {/* Watchlist */}
                <Card className="shadow-md bg-white">
                    <CardHeader>
                        <CardTitle>📈 52 Week High</CardTitle>
                        <CardDescription>Year’s highest stocks.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {marketData.weekHigh.map((stock, index) => (
                            <div key={index} className="flex justify-between items-center border-b last:border-none pb-2 mb-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-sm font-bold">
                                        {stock.logo}
                                    </div>
                                    <div>
                                        <p className="font-medium">{stock.name}</p>
                                        <p className="text-xs text-gray-500">{stock.change}</p>
                                    </div>
                                </div>
                                <p className="font-semibold text-gray-700">{stock.price}</p>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                {/* 52 Week Low */}
                <Card className="shadow-md bg-white">
                    <CardHeader>
                        <CardTitle>📉 52 Week Low</CardTitle>
                        <CardDescription>Year’s lowest stocks.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {marketData.weekLow.map((stock, index) => (
                            <div key={index} className="flex justify-between items-center border-b last:border-none pb-2 mb-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-sm font-bold">
                                        {stock.logo}
                                    </div>
                                    <div>
                                        <p className="font-medium">{stock.name}</p>
                                        <p className={`text-xs ${stock.change.includes('-') ? 'text-red-500' : 'text-green-600'}`}>
                                            {stock.change}
                                        </p>
                                    </div>
                                </div>
                                <p className={`font-semibold ${stock.change.includes('-') ? 'text-red-600' : 'text-green-600'}`}>
                                    {stock.price}
                                </p>
                            </div>
                        ))}
                    </CardContent>
                </Card>


            </div>
        </div>
    );
}
