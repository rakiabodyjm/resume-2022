import { certificates as certificateData } from '@data/certificates'

export function getCertificates(
  parent,
  args: {
    type: 'TICKET' | 'CERTIFICATE'
  },
  context,
  info
) {
  // console.log('getcert args', args)
  const certificates = [...certificateData].reverse()
  if (args && args.type) {
    if (args.type === 'CERTIFICATE') {
      return [...certificates].slice(0, 2)
    }
    if (args.type === 'TICKET') {
      return [...certificates].slice(2, certificates.length)
    }
  }
  return certificates
}
