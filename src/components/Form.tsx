import emailjs from '@emailjs/browser'
import { useForm, type FieldValues } from 'react-hook-form'

type Props = {
    serviceId: string
    templateId: string
    publicId: string
}
export const Form = ({ serviceId, templateId, publicId }: Props) => {
    const { register, handleSubmit } = useForm()

    const onSubmit = async (data: FieldValues) => {
        try {
            await emailjs.send(serviceId, templateId, data, publicId)
            window.location.href = '/contact/completed/'
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <form className="max-w-sm mx-auto p-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
                <label htmlFor="from_name" className="block mb-2 text-sm font-medium text-gray-900">
                    お名前
                </label>
                <input
                    type="text"
                    id="from_name"
                    aria-required
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    {...register('from_name')}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="from_email" className="block mb-2 text-sm font-medium text-gray-900 ">
                    メールアドレス
                </label>
                <input
                    id="from_email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    {...register('from_email')}
                />
            </div>

            <div className="mb-5">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">
                    メッセージ本文
                </label>
                <textarea
                    id="message"
                    rows={4}
                    required
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    {...register('message')}
                />
            </div>
            <div className="text-right">
                <button
                    type="submit"
                    className="text-white bg-blue-700  hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                >
                    送信
                </button>
            </div>
        </form>
    )
}
