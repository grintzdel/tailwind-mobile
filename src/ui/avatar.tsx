import React from 'react'

import Image from 'next/image'

type AvatarProps = {
  src: string
}

export const Avatar: React.FC<AvatarProps> = ({ src }: AvatarProps): React.JSX.Element => {
  return <Image height={80} width={80} src={src} alt={src} className="h-15 w-15 rounded-full object-fill" />
}
