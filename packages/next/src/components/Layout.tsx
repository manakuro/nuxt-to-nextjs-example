import React from 'react'

const NUXT_URL = process.env.NEXT_PUBLIC_NUXT_URL
export const Layout: React.FCWithChildren = (props) => {
  return (
    <div>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
        <ul className="flex flex-wrap -mb-px">
          <li className="mr-2">
            <a href={`${NUXT_URL}`} className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300">Home</a>
          </li>
          <li className="mr-2">
            <a href="about" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300">About</a>
          </li>
          <li className="mr-2">
            <a href={`${NUXT_URL}works`} className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300">Works</a>
          </li>
          <li className="mr-2">
            <a href={`${NUXT_URL}blog`} className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300">Blog</a>
          </li>
        </ul>
      </div>
      <div className="p-4">
        {props.children}
      </div>
    </div>
  )
}
