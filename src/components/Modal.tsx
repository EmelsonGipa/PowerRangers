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
            <div className="bg-white dark:bg-gray-800/90 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 max-w-sm w-full overflow-hidden">
                {/* Header Bar */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-900 dark:to-blue-800 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-lg font-semibold text-white">{title}</h2>
                </div>

                {/* Content */}
                <div className="px-6 py-5">
                    <p className="text-gray-700 dark:text-gray-100 text-sm leading-relaxed">{message}</p>
                </div>

                {/* Footer */}
                <div className="bg-gray-50 dark:bg-gray-900/80 px-6 py-4 flex justify-end border-t border-gray-200 dark:border-gray-700">
                    <button
                        onClick={onAction || onClose}
                        className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-6 py-2 rounded-lg font-medium transition-colors text-sm"
                    >
                        {actionText}
                    </button>
                </div>
            </div>
        </div>
    );
}
