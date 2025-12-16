
interface ModalProps {
    isOpen: boolean;
    title: string;
    message: string;
    onClose: () => void;
    actionText?: string;
    onAction?: () => void;
}

export default function Modal({
    isOpen,
    title,
    message,
    onClose,
    actionText = 'Close',
    onAction,
}: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-2xl max-w-sm w-full overflow-hidden">
                {/* Header Bar */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 border-b">
                    <h2 className="text-lg font-semibold text-white">{title}</h2>
                </div>

                {/* Content */}
                <div className="px-6 py-5">
                    <p className="text-gray-700 text-sm leading-relaxed">{message}</p>
                </div>

                {/* Footer */}
                <div className="bg-gray-50 px-6 py-4 flex justify-end border-t">
                    <button
                        onClick={onAction || onClose}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm"
                    >
                        {actionText}
                    </button>
                </div>
            </div>
        </div>
    );
}
