import Image from "next/image";
import Link from "next/link";

interface Article {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

function Articles({ articles }: any) {
  return (
    <div className="flex flex-col items-center gap-3 flex-wrap justify-center">
      {articles.map((article: Article) => (
        <Link key={article.id} href={article.link} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-950 dark:hover:bg-gray-900 transition-all">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-xl font-light tracking-tight text-gray-900 dark:text-white">
            {article.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {article.description}
          </p>
        </div>
        <Image height={100} width={100} className="dark:border-2 max-h-[100px] max-w-[100px] dark:border-gray-600 mx-5 object-cover w-full rounded h-96" src={article.imageUrl} alt={article.title} />
      </Link>
      ))}
    </div>
  );
}

export default Articles;
