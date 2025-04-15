import { Sparkles } from "@/components/ui/sparkles"
import { InfiniteSlider } from '@/components/ui/infinite-slider'


// logos

const Retool = () => (
  <svg viewBox="0 0 180 56" fill="currentColor" className="w-full">
    <path d="M34 18.2a2.2 2.2 0 012.2-2.2h8.6a2.2 2.2 0 012.2 2.2v1.7a1.1 1.1 0 01-1.1 1.1H35.1a1.1 1.1 0 01-1.1-1.1v-1.7zM34 25.1a1.1 1.1 0 011.1-1.1h20.7a2.2 2.2 0 012.2 2.2v5.7a1.1 1.1 0 01-1.1 1.1H36.2a2.2 2.2 0 01-2.2-2.2v-5.7zM45 37.1a1.1 1.1 0 011.1-1.1h10.8a1.1 1.1 0 011.1 1.1v.7a2.2 2.2 0 01-2.2 2.2h-8.6a2.2 2.2 0 01-2.2-2.2v-.7zM71.596 30.741h2.311l4.293 7.017h5.256l-4.76-7.512c2.641-.909 4.182-2.945 4.182-5.89 0-4.127-2.89-6.356-7.54-6.356H67v19.758h4.596v-7.017zm0-3.742V21.88h3.494c2.174 0 3.275.936 3.275 2.56 0 1.595-1.1 2.558-3.275 2.558h-3.494zM91.363 38.06c2.89 0 5.531-1.458 6.605-4.237L94.28 32.64c-.413 1.266-1.486 1.926-2.862 1.926-1.678 0-2.862-1.128-3.164-3.11h9.824v-1.155c0-4.1-2.395-7.348-6.797-7.348-4.183 0-7.265 3.247-7.265 7.54 0 4.513 2.972 7.568 7.347 7.568zm-.138-11.694c1.624 0 2.477 1.1 2.505 2.394H88.39c.44-1.596 1.486-2.394 2.834-2.394zM100.573 33.878c0 2.972 1.569 4.018 4.706 4.018 1.046 0 1.871-.083 2.642-.193v-3.605c-.496.055-.743.083-1.266.083-1.101 0-1.734-.22-1.734-1.431v-5.862h2.834v-3.632h-2.834v-4.018h-4.348v4.018h-1.844v3.632h1.844v6.99zM123.672 30.52c0-4.512-3-7.567-7.265-7.567-4.293 0-7.265 3.055-7.265 7.568s2.972 7.54 7.265 7.54c4.265 0 7.265-3.027 7.265-7.54zm-10.154 0c0-2.53 1.128-3.962 2.889-3.962s2.89 1.431 2.89 3.963-1.129 3.962-2.89 3.962c-1.761 0-2.889-1.43-2.889-3.962zM139.527 30.52c0-4.512-2.999-7.567-7.265-7.567-4.293 0-7.265 3.055-7.265 7.568s2.972 7.54 7.265 7.54c4.266 0 7.265-3.027 7.265-7.54zm-10.154 0c0-2.53 1.128-3.962 2.889-3.962 1.762 0 2.89 1.431 2.89 3.963s-1.128 3.962-2.89 3.962c-1.761 0-2.889-1.43-2.889-3.962zM146 18h-4.403v19.758H146V18z" />
  </svg>
)

const Vercel = () => (
  <svg viewBox="0 0 180 54" fill="currentColor" className="w-full">
    <path d="M89.515 20.5c-4.424 0-7.614 2.925-7.614 7.313 0 4.387 3.59 7.312 8.014 7.312 2.673 0 5.03-1.072 6.488-2.88l-3.066-1.796c-.81.898-2.04 1.422-3.422 1.422-1.919 0-3.55-1.016-4.155-2.64h11.228c.088-.456.14-.927.14-1.423 0-4.383-3.19-7.308-7.613-7.308zm-3.791 5.89c.5-1.62 1.871-2.64 3.787-2.64 1.919 0 3.29 1.02 3.786 2.64h-7.573zm46.938-5.89c-4.424 0-7.613 2.925-7.613 7.313 0 4.387 3.59 7.312 8.014 7.312 2.672 0 5.028-1.072 6.487-2.88l-3.065-1.796c-.81.898-2.04 1.422-3.422 1.422-1.92 0-3.551-1.016-4.156-2.64h11.228c.088-.456.14-.927.14-1.423 0-4.383-3.189-7.308-7.613-7.308zm-3.787 5.89c.501-1.62 1.872-2.64 3.787-2.64 1.919 0 3.29 1.02 3.787 2.64h-7.574zm-15.639 1.422c0 2.438 1.571 4.063 4.007 4.063 1.651 0 2.889-.76 3.526-1.999l3.078 1.8c-1.275 2.153-3.663 3.449-6.604 3.449-4.428 0-7.613-2.925-7.613-7.313 0-4.387 3.189-7.312 7.613-7.312 2.941 0 5.325 1.296 6.604 3.45l-3.078 1.799c-.637-1.24-1.875-1.999-3.526-1.999-2.432 0-4.007 1.625-4.007 4.063zm33.05-11.78v18.687h-3.607V16.03h3.607zM47.806 14l14.806 26H33l14.806-26zm37.016 2.031l-11.103 19.5-11.103-19.5h4.163l6.94 12.188 6.94-12.188h4.163zm23.606 4.875v3.937a4.517 4.517 0 00-1.283-.2c-2.328 0-4.007 1.626-4.007 4.063v6.013h-3.606V20.906h3.606v3.738c0-2.064 2.369-3.738 5.29-3.738z" />
  </svg>
)

const Remote = () => (
  <svg viewBox="0 0 180 56" fill="currentColor" className="w-full">
    <path d="M51.1294 35.0449H51.4609V41H50.4859C44.1484 41 40.4825 37.3997 40.4825 31.503V28.4671L42.5495 27.9416C43.1539 27.7859 43.6999 27.4746 44.1289 27.0269C44.5579 26.5793 44.8504 26.015 44.9869 25.4117C45.1234 24.8084 45.0649 24.1662 44.8504 23.5823C44.6359 22.9985 44.2654 22.4925 43.7779 22.1033C43.2905 21.7141 42.7055 21.4805 42.0815 21.4222C41.4575 21.3638 40.8335 21.4611 40.2875 21.7335C39.722 22.006 39.254 22.4341 38.9225 22.9596C38.591 23.485 38.4155 24.0883 38.4155 24.7111V37.6916H32V24.497C32 24.1078 32.0195 23.6991 32.078 23.3099C32.6825 18.6198 36.7775 15 41.7305 15C46.2349 15 50.0179 17.9775 51.1294 22.0254C51.7144 24.1467 51.5194 26.4042 50.6029 28.4087C49.8229 30.1018 48.5554 31.5225 46.9759 32.4955C47.5219 34.6557 48.6334 35.0449 51.1294 35.0449ZM67.0023 23.6018V27.241H66.3978C65.1498 27.241 64.1749 27.5913 63.4729 28.2725C62.7709 28.9536 62.4199 29.8877 62.4199 31.0749V37.6332H58.8904V23.8159H62.4199V25.6063C63.4729 24.2635 64.7989 23.6018 66.3978 23.6018H67.0023ZM82.1538 32.009H71.4483C71.6628 32.8458 72.1698 33.5853 72.8718 34.0913C73.6128 34.6168 74.5098 34.8892 75.4068 34.8503C76.1673 34.8503 76.9278 34.6946 77.6103 34.3638C78.2343 34.0913 78.7803 33.6632 79.1898 33.1377L81.5493 35.2006C80.8083 36.0763 79.8723 36.7769 78.8193 37.244C77.7078 37.7305 76.4988 37.9835 75.2703 37.9641C73.9053 37.9835 72.5403 37.6527 71.3313 37.0105C70.1808 36.4072 69.2448 35.4925 68.5818 34.3832C67.9383 33.2545 67.5873 31.9895 67.5873 30.7051C67.5873 29.4207 67.9188 28.1362 68.5428 27.0075C69.1668 25.9177 70.0833 25.0225 71.1948 24.4192C72.3453 23.7964 73.6323 23.4656 74.9388 23.485C77.0058 23.485 78.7413 24.1662 80.1258 25.5479C81.5103 26.9296 82.2123 28.6617 82.2123 30.744C82.2513 31.1722 82.2123 31.5808 82.1538 32.009ZM77.1813 27.3578C76.5378 26.8518 75.7578 26.5793 74.9388 26.5793C74.1198 26.5793 73.3398 26.8518 72.6963 27.3578C72.0528 27.8832 71.6043 28.6228 71.4093 29.4207H78.4683C78.2928 28.6033 77.8248 27.8832 77.1813 27.3578ZM104.852 24.9057C105.788 25.8398 106.275 27.0853 106.275 28.6617V37.6527H102.746V29.7126C102.746 28.8563 102.492 28.1946 102.005 27.6886C101.517 27.1826 100.854 26.9296 100.035 26.9296C99.1772 26.9296 98.4752 27.1826 97.9292 27.7081C97.3832 28.2335 97.1297 28.9147 97.1297 29.771V37.6527H93.6002V29.7126C93.6002 28.8757 93.3467 28.1946 92.8592 27.6886C92.3522 27.1826 91.6892 26.9296 90.8702 26.9296C90.4802 26.9102 90.1097 26.9686 89.7392 27.1048C89.3882 27.241 89.0567 27.4551 88.7642 27.7081C88.4912 27.9805 88.2767 28.2919 88.1402 28.6617C88.0037 29.012 87.9452 29.4012 87.9452 29.771V37.6527H84.4158V23.8353H87.9647V25.256C88.9982 24.0883 90.3632 23.5045 92.0597 23.5045C92.9567 23.485 93.8342 23.6796 94.6337 24.0883C95.3747 24.4775 95.9792 25.0419 96.4082 25.7425C97.5587 24.244 99.1187 23.485 101.108 23.485C102.668 23.5045 103.916 23.9716 104.852 24.9057ZM123.143 30.7246C123.143 32.7874 122.441 34.5 121.017 35.8817C119.594 37.2635 117.839 37.9641 115.713 37.9446C113.607 37.9446 111.833 37.244 110.409 35.8623C108.986 34.4805 108.264 32.768 108.264 30.7051C108.264 28.6422 108.986 26.9296 110.409 25.5479C111.833 24.1662 113.607 23.4656 115.713 23.4656C117.819 23.4656 119.594 24.1662 121.017 25.5479C122.441 26.9491 123.162 28.6811 123.143 30.7246ZM118.443 33.4686C119.126 32.729 119.516 31.756 119.516 30.744C119.516 29.732 119.126 28.759 118.443 28.0195C118.092 27.6692 117.663 27.3772 117.195 27.1826C116.727 26.988 116.24 26.8907 115.733 26.8907C115.226 26.8907 114.738 26.988 114.27 27.1826C113.802 27.3772 113.373 27.6497 113.022 28.0195C112.32 28.759 111.93 29.732 111.93 30.744C111.93 31.756 112.32 32.729 113.022 33.4686C113.744 34.1692 114.719 34.5584 115.733 34.5584C116.747 34.5389 117.722 34.1497 118.443 33.4686ZM129.597 27.0464V32.7874C129.597 33.9746 130.241 34.5584 131.508 34.5584C132.132 34.5389 132.756 34.3832 133.322 34.0913V37.3802C132.522 37.7889 131.645 38.003 130.748 37.9835C129.207 37.9835 128.037 37.5749 127.257 36.7575C126.477 35.9401 126.087 34.8114 126.087 33.3713V27.0659H123.884V23.8548H126.087V21.5584L129.617 20.3518V23.8548H133.341V27.0659H129.597V27.0464ZM148.921 32.009H138.216C138.431 32.8458 138.938 33.5853 139.64 34.0913C140.381 34.6168 141.278 34.8892 142.175 34.8503C142.935 34.8503 143.695 34.6946 144.378 34.3638C145.002 34.0913 145.548 33.6632 145.977 33.1377L148.336 35.2006C147.595 36.0763 146.659 36.7769 145.606 37.244C144.495 37.7305 143.286 37.9835 142.058 37.9641C140.693 37.9835 139.328 37.6527 138.119 37.0105C136.968 36.4072 136.032 35.4925 135.369 34.3832C134.726 33.2545 134.375 31.9895 134.375 30.7051C134.375 29.4207 134.706 28.1362 135.33 27.0075C135.954 25.9177 136.871 25.0225 137.982 24.4192C139.133 23.7964 140.42 23.4656 141.726 23.485C143.793 23.485 145.528 24.1662 146.913 25.5479C148.297 26.9296 148.999 28.6617 148.999 30.744C148.999 31.1722 148.98 31.6003 148.921 32.009ZM143.949 27.3578C143.305 26.8518 142.526 26.5793 141.707 26.5793C140.888 26.5793 140.108 26.8518 139.464 27.3578C138.821 27.8832 138.372 28.6228 138.177 29.4207H145.236C145.06 28.6033 144.592 27.8832 143.949 27.3578Z" />
  </svg>
)

const Arc = () => (
  <svg viewBox="0 0 180 56" fill="currentColor" className="w-full">
    <path d="M133.969 31.642a.918.918 0 00-.673.287c-.909.938-2.098 1.51-3.483 1.51a4.803 4.803 0 01-2.232-.546c-1.814-.947-2.987-3.015-2.661-5.319.356-2.529 2.567-4.411 5.045-4.338 1.322.04 2.457.604 3.334 1.509a.914.914 0 00.672.286c.554 0 1.029-.49 1.029-1.02 0-.247-.078-.53-.278-.735a6.742 6.742 0 00-4.277-2.055c-3.913-.348-7.435 2.84-7.557 6.886-.122 4.066 3.01 7.374 6.925 7.374 1.94 0 3.642-.777 4.909-2.081.198-.204.278-.49.278-.734-.002-.533-.478-1.023-1.031-1.023zM116.535 29.095c1.283-.735 2.135-2.1 2.094-3.77-.055-2.325-1.995-4.135-4.25-4.135h-6.239c-.546 0-.989.457-.989 1.02v11.883c0 .519.358.995.856 1.052.616.07 1.123-.356 1.123-.974V31.58c0-.2.131-.372.317-.42l3.506-.895 1.447-.38a.415.415 0 01.484.238l1.959 4.44c.16.365.507.58.872.58a.96.96 0 00.632-.244c.33-.288.399-.788.22-1.193l-2.032-4.61zm-7.405-.42v-5.093c0-.24.188-.431.418-.431h4.767c1.384 0 2.335.98 2.335 2.288 0 1.307-.779 2.251-2.37 2.602l-4.643 1.056a.421.421 0 01-.507-.422zM96.89 21.967c-.21-.455-.655-.727-1.192-.727-.537 0-.983.272-1.192.725l-5.462 11.742c-.071.145-.11.325-.11.488 0 .557.422.976.985.976a.944.944 0 00.895-.57l1.017-2.172a8.97 8.97 0 001.403.386c.792.151 1.59.203 2.377.194.79-.007 1.568-.104 2.335-.235.383-.066.76-.163 1.141-.243l.466-.133 1.024 2.188a.956.956 0 00.903.587c.638 0 .982-.502.982-.975 0-.166-.041-.344-.105-.481l-5.467-11.75zm.757 9.04c-.686.117-1.38.205-2.066.21-.687.006-1.37-.036-2.03-.164a7.106 7.106 0 01-.962-.251l.82-1.755h-.003l1.913-4.085a.413.413 0 01.753 0l1.761 3.76.088.188.064.137.797 1.707-.11.031c-.34.074-.68.164-1.025.223zM77.035 23.307c.212-1.058.044-2.13-.468-3.019-.592-1.023-1.538-1.714-2.668-1.946a3.901 3.901 0 00-.808-.08c-1.92 0-3.536 1.387-3.931 3.371a9.394 9.394 0 01-1.183 3.015.11.11 0 01-.1.054.113.113 0 01-.1-.069l-3.765-8.17c-.521-1.129-1.449-1.967-2.546-2.298-1.876-.569-3.922.376-4.762 2.197l-3.897 8.449a.048.048 0 01-.043.028c-.028 0-.033-.016-.037-.028-.618-1.575-2.08-2.593-3.729-2.593-.533 0-1.054.109-1.55.322-.992.426-1.756 1.24-2.158 2.292a4.375 4.375 0 00.032 3.214c.737 1.818 1.97 3.573 3.566 5.074.039.036.05.09.027.138l-1.258 2.732c-.95 2.063-.151 4.556 1.78 5.56a3.9 3.9 0 001.813.448c1.543 0 2.97-.929 3.633-2.366l1.086-2.356a.112.112 0 01.135-.062 14.83 14.83 0 004.025.578c1.458 0 2.942-.223 4.404-.66a.111.111 0 01.136.061l1.074 2.333c.69 1.494 2.124 2.464 3.66 2.474h.023a3.87 3.87 0 001.812-.447c1.93-1.005 2.728-3.505 1.772-5.575l-1.357-2.934a.12.12 0 01.028-.137c2.742-2.617 4.643-6.026 5.354-9.6zM54.201 36.69l-.98 2.126a2.19 2.19 0 01-1.975 1.286c-.338 0-.664-.078-.97-.234-1.06-.543-1.492-1.916-.964-3.065l1.045-2.268a.122.122 0 01.108-.071c.018 0 .041.005.062.021a17.81 17.81 0 003.61 2.044c.04.016.06.05.066.068a.107.107 0 01-.002.093zm9.565-1.345a.108.108 0 01-.07.061c-1.19.325-2.391.49-3.571.49-5.465 0-11.24-3.817-13.15-8.688-.45-1.15.09-2.465 1.206-2.931.261-.11.537-.166.817-.166.896 0 1.69.552 2.025 1.409 1.247 3.183 5.417 5.873 9.102 5.873.555 0 1.125-.055 1.694-.164.053-.01.106.014.127.064l1.82 3.947a.136.136 0 010 .105zm-4.468-6.183l.733-1.591a.273.273 0 01.252-.164.28.28 0 01.253.164l.716 1.553a.29.29 0 01-.007.26.27.27 0 01-.204.147 6.112 6.112 0 01-1.518.04.276.276 0 01-.213-.144.292.292 0 01-.012-.265zm11.09 10.706a2.108 2.108 0 01-.969.234 2.188 2.188 0 01-1.972-1.286l-6.578-14.27a.584.584 0 00-1.07 0l-2.04 4.426a.115.115 0 01-.137.064c-1.361-.483-2.638-1.295-3.596-2.282a.117.117 0 01-.018-.13l4.408-9.562c.148-.32.359-.578.609-.746.592-.4 1.265-.519 1.899-.337a2.199 2.199 0 011.382 1.201l9.047 19.626c.53 1.146.096 2.52-.965 3.062zm.526-8.807a.123.123 0 01-.106.036.11.11 0 01-.082-.067l-1.929-4.186a.12.12 0 01.014-.123c1.09-1.443 1.837-3.086 2.16-4.755.205-1.05 1.103-1.812 2.138-1.812h.002c.177 0 .356.024.533.069 1.144.293 1.84 1.506 1.584 2.76-.613 3.001-2.103 5.793-4.314 8.078z" />
  </svg>
)

const Raycast = () => (
  <svg viewBox="0 0 180 56" fill="currentColor" className="w-full">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M34.292 33.307v3.443L26 28.5l1.731-1.723 6.56 6.53zm3.46 3.443h-3.46L42.583 45l1.732-1.723-6.563-6.527zm19.68-6.527l1.73-1.723L42.58 12l-1.727 1.727 6.56 6.527h-3.964l-4.58-4.547-1.73 1.723 2.847 2.833h-1.99V33.07h12.871v-1.98l2.848 2.834 1.732-1.723-4.58-4.556V23.7l6.565 6.523zM35.155 19.396L33.42 21.12l1.858 1.848 1.731-1.723-1.853-1.848zm14.726 14.652l-1.73 1.723 1.856 1.848 1.732-1.723-1.858-1.848zM31.442 23.09l-1.732 1.723 4.58 4.556v-3.445l-2.848-2.834zm13.735 13.667h-3.46l4.579 4.556 1.731-1.723-2.85-2.833z"
    ></path>
    <path d="M151.74 36.73c-1.116 0-1.99-.301-2.613-.906-.624-.605-.936-1.446-.936-2.51v-6.6h-2.003v-2.471h2.014l.359-3.3h2.359v3.3H154v2.475h-3.08v6.237a1.3 1.3 0 00.356.92 1.22 1.22 0 00.94.38H154v2.475h-2.26zM139.691 36.963c-1.489 0-2.686-.353-3.593-1.06a4.739 4.739 0 01-1.74-2.816h2.961c.129.429.417.793.804 1.02a2.917 2.917 0 001.568.386c1.579 0 2.373-.44 2.373-1.29 0-.423-.249-.747-.745-.97a8.223 8.223 0 00-1.8-.534 22.253 22.253 0 01-2.125-.52 3.697 3.697 0 01-1.816-1.2c-.493-.587-.741-1.359-.743-2.315a3.264 3.264 0 011.252-2.616c.837-.695 1.998-1.042 3.483-1.04 1.484 0 2.663.33 3.537.99a4.415 4.415 0 011.679 2.666h-2.966c-.316-.781-1.061-1.18-2.242-1.181-1.267 0-1.899.393-1.899 1.18a1.016 1.016 0 00.533.88 3.55 3.55 0 001.327.472c.587.1 1.168.233 1.74.4.593.169 1.174.376 1.74.62a3.092 3.092 0 011.342 1.162 3.53 3.53 0 01.537 2 3.28 3.28 0 01-.333 1.517 3.307 3.307 0 01-.993 1.198c-.882.7-2.175 1.05-3.881 1.051zM130.862 25.257c-.912-.817-2.19-1.225-3.834-1.225-1.31 0-2.409.35-3.297 1.053a4.928 4.928 0 00-1.755 2.722h2.799c.142-.408.414-.76.774-1.001a2.488 2.488 0 011.481-.416c.77 0 1.376.198 1.82.59a2.081 2.081 0 01.663 1.645v.596h-3.206c-1.474 0-2.632.37-3.474 1.111a3.568 3.568 0 00-1.255 2.777 3.645 3.645 0 001.171 2.785c.779.733 1.811 1.1 3.096 1.1a4.748 4.748 0 002.291-.53 3.43 3.43 0 001.388-1.234h.115l.233 1.54h2.368v-8.14c-.005-1.429-.464-2.553-1.378-3.373zm-1.346 6.67a2.525 2.525 0 01-.83 1.98c-.549.486-1.3.73-2.251.73-.692 0-1.222-.158-1.587-.466a1.495 1.495 0 01-.553-1.19c0-1.1.723-1.646 2.14-1.646h3.081v.592zM114.473 36.99c-1.796 0-3.232-.574-4.307-1.72-1.074-1.148-1.612-2.735-1.614-4.762 0-2.022.536-3.608 1.608-4.756 1.071-1.148 2.509-1.722 4.313-1.72 1.466 0 2.68.388 3.644 1.166a5.532 5.532 0 011.92 2.954h-2.716a3.054 3.054 0 00-2.845-1.646 2.887 2.887 0 00-2.326 1.046c-.59.7-.885 1.685-.885 2.956 0 1.272.295 2.258.885 2.957a2.872 2.872 0 002.326 1.05 3.06 3.06 0 002.845-1.648h2.716a5.524 5.524 0 01-1.92 2.957c-.962.777-2.177 1.166-3.644 1.166zM98.455 41.476l1.895-4.717-5.088-12.487h2.96l3.434 8.837h.115l3.439-8.837h2.96l-6.872 17.204h-2.843zM92.704 25.257c-.913-.817-2.191-1.225-3.835-1.225-1.31 0-2.412.35-3.296 1.053a4.92 4.92 0 00-1.756 2.722h2.8c.14-.409.412-.76.773-1.001a2.48 2.48 0 011.482-.416c.769 0 1.376.197 1.82.59a2.074 2.074 0 01.663 1.645v.596h-3.207c-1.474 0-2.632.37-3.473 1.111a3.56 3.56 0 00-1.256 2.777 3.642 3.642 0 001.167 2.785c.779.733 1.81 1.1 3.096 1.1a4.745 4.745 0 002.29-.53 3.431 3.431 0 001.39-1.234h.114l.232 1.54h2.364v-8.14c0-1.429-.456-2.553-1.368-3.373zm-1.351 6.67a2.51 2.51 0 01-.83 1.98c-.548.487-1.298.73-2.25.73-.693 0-1.226-.156-1.588-.466a1.494 1.494 0 01-.553-1.19c.007-1.096.72-1.644 2.14-1.646h3.08v.592zM77.343 30.509c.422-.112.83-.272 1.216-.475a6.86 6.86 0 001.256-.88 4.036 4.036 0 001.046-1.54c.269-.69.401-1.425.39-2.165 0-1.57-.503-2.83-1.511-3.775-1.009-.946-2.32-1.418-3.936-1.415h-6.87v16.5h2.96v-6.122h2.247l4.267 6.122h3.317l-4.382-6.25zm-5.449-2.482v-5.17h3.669c.84 0 1.503.227 1.99.68.486.453.453.73 1.088.734 1.905 0 .817-.246 1.454-.739 1.91a2.784 2.784 0 01-1.961.675h-3.693z"></path>
  </svg>
)


const logos = [
  {
    id: "retool",
    component: Retool,
    className: "w-32"
  },
  {
    id: "vercel",
    component: Vercel,
    className: "w-32"
  },
  {
    id: "remote",
    component: Remote,
    className: "w-32"
  },
  {
    id: "arc",
    component: Arc,
    className: "w-32"
  },
  {
    id: "raycast",
    component: Raycast,
    className: "w-32"
  }
]

export default function Hero() {
  return (
    <div className="h-[70vh] w-full overflow-hidden">
      <div className="mx-auto mt-32 w-full max-w-2xl">
        <div className="text-center text-3xl text-foreground">
          <span className="text-indigo-900 dark:text-indigo-200">
            The best are already here
          </span>
          <br />
          <span className="text-5xl">Join new cult</span>
        </div>

        <div className="relative mt-7 h-[100px] w-full">
          <InfiniteSlider 
            className='flex h-full w-full items-center' 
            duration={30}
            gap={48}
          >
            {logos.map(({ id, component: Logo, className }) => (
              <div 
                key={id} 
                className={className}
              >
                <Logo />
              </div>
            ))}
          </InfiniteSlider>
          
        </div>
      </div>

      <div className="relative -mt-32 h-96 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]">
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#8350e8,transparent_150%)] before:opacity-40" />
        <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-zinc-900/20 dark:border-white/20 bg-white dark:bg-zinc-900" />
        <Sparkles
          density={1200}
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
          color={"#000000"}
        />
      </div>
    </div>
  )
}