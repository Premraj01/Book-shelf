import QRCode from "qrcode";

export const generateQRCode = (value: string) => {
	return QRCode.toDataURL(value);
};
