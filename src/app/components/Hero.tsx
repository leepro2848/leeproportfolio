import Image from 'next/image';

export default function Hero() {
    return (
        <section className="min-h-[600px] flex items-center justify-center bg-transparent py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* 프로필 이미지 */}
                    <div className="gradient-border w-48 h-48 rounded-full p-[1px]">
                        <div className="w-full h-full relative rounded-full overflow-hidden">
                            <Image
                                src="/profile.png"
                                alt="프로필 이미지"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                    
                    {/* 프로필 정보 */}
                    <div className="flex-1">
                        <div className="space-y-6">
                            <div className="border-b border-gray-700 pb-4">
                                <h2 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                                    _I AM
                                </h2>
                                <p className="text-gray-300">이름 : 이프로</p>
                                <p className="text-gray-300">포지션: PM 서비스 기획 / FE Developer(jr)</p>
                            </div>
                            
                            <div className="border-b border-gray-700 pb-4">
                                <h2 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600">
                                    _Contact
                                </h2>
                                <p className="text-gray-300">Email : leepro@naver.com</p>
                                <p className="text-gray-300">Phone : +082-1234-5678</p>
                            </div>
                            
                            <div>
                                <h2 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-600">
                                    _Channel
                                </h2>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-300">SNS :</span>
                                        <div className="gradient-border flex-1">
                                            <div className="h-8 bg-gray-800 rounded flex items-center px-3 text-gray-300">
                                                링크를 입력하세요
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-300">GitHub :</span>
                                        <div className="gradient-border flex-1">
                                            <div className="h-8 bg-gray-800 rounded flex items-center px-3 text-gray-300">
                                                링크를 입력하세요
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
